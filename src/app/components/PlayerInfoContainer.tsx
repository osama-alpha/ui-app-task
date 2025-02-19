'use client';
import { useState } from 'react';
import PlayerInfo from './PlayerInfoCard';
import CollapsibleCard from './PlayerInfoCollapsableCard';
import Image from 'next/image';
import PlayerMenu from './PlayerMenu';

const PlayerInfoContainer: React.FC = () => {
  const [isPlayerMenuOpen, setIsPlayerMenuOpen] = useState(false);

  const PLAYER_INFO_DATA = {
    status: 'Active',
    selfExclusion: 'Not self-excluded',
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
  };
  const PLAYER_INFO_FIELDS: {
    label: string;
    key: keyof typeof PLAYER_INFO_DATA;
    type?: 'active' | 'excluded' | 'expired' | 'time';
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
    { label: 'Registered at', key: 'registeredAt', type: 'time' },
    { label: 'Last login', key: 'lastLogin', type: 'time' },
  ];
  const PLAYER_CONTACT_DATA = {
    address1: 'Rio de Janerio',
    address2: '-',
    city_town: 'Rio de Janerio',
    post_code: '12345',
    country: '🇺🇸United States',
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
    tc_update: 'No',
    tc_accepted: 'Active',
    registration_channel2: '0',
  };

  const PLAYER_MISC_INFO_FIELDS: {
    label: string;
    key: keyof typeof PLAYER_MISC_INFO_DATA;
    type?: 'active' | 'excluded' | 'expired';
  }[] = [
    { label: 'Language', key: 'language' },
    {
      label: 'E-mail marketing consent',
      key: 'email_m_consent',
      type: 'expired',
    },
    { label: 'SMS Marketing Consent', key: 'sms_m_consent', type: 'active' },
    { label: 'Intended extent of gambling', key: 'intended_gambling' },
    { label: 'Registered by', key: 'registered_by' },
    { label: 'Registration Channel', key: 'registration_channel' },
    { label: 'First Deposit at', key: 'first_deposit' },
    { label: 'Affiliate Code', key: 'affiliate_code' },
    { label: 'Tax Code', key: 'tax_code' },
    { label: 'Last T&C update type', key: 'tc_update' },
    { label: 'General T&C accepted', key: 'tc_accepted', type: 'active' },
    { label: 'Registration Channel', key: 'registration_channel2' },
  ];

  const BALANCE_INFO = {
    realCash: '$9,982.80',
    bonusCash: '$210.00',
    realLocked: '$0.00',
    negativeRemainder1: '$0.00',
    highlightedRemainder: '$10,192.80',
  };

  const BALANCE_FIELDS = [
    { label: 'GmWallet.RealCash', key: 'realCash' },
    { label: 'GmWallet.BonusCash', key: 'bonusCash' },
    { label: 'GmWallet.RealLocked', key: 'realLocked' },
    { label: 'GmWallet.RealNegativeRemainder', key: 'negativeRemainder2' },
    {
      label: 'GmWallet.RealNegativeRemainder',
      key: 'highlightedRemainder',
      highlight: true,
    },
  ];

  const SECURITY_INFO = {
    personalId: '-',
    iban: '-',
    twoFactorAuth: 'None',
    securityQuestion: 'what is my pet name',
    securityAnswer: 'saimi',
  };

  const SECURITY_FIELDS = [
    { label: 'Personal ID', key: 'personalId' },
    { label: 'IBAN', key: 'iban' },
    { label: '2nd Factor Auth', key: 'twoFactorAuth' },
    { label: 'Security question', key: 'securityQuestion' },
    { label: 'Security answer', key: 'securityAnswer' },
  ];

  const IP_ADDRESSES = [
    '🇧🇩 154.192.48.49',
    '🇵🇱 103.126.7.226',
    '🇵🇰 46.37.97.68',
    '🇵🇱 154.192.48.49',
    '🇵🇰 154.192.48.49',
  ];

  const IP_FIELDS = IP_ADDRESSES.map((ip, index) => ({
    label: ip,
    key: `ip-${index}`,
  }));

  return (
    <div
      className="flex flex-col w-full"
      onClick={() =>
        isPlayerMenuOpen ? setIsPlayerMenuOpen(!isPlayerMenuOpen) : null
      }
    >
      <div className="flex items-center min-h-20 justify-between w-full px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            aria-label={`${
              isPlayerMenuOpen ? 'Close Player Menu' : 'Open Player Menu'
            }`}
            className="lg:hidden p-2 rounded-md bg-secondary hover:bg-opacity-80"
            onClick={() => setIsPlayerMenuOpen(!isPlayerMenuOpen)}
          >
            <Image
              src={'/menu.svg'}
              alt="Open Player Menu"
              height={20}
              width={20}
            />
          </button>
          <h2 className="text-xl font-semibold">Player Info</h2>
        </div>

        <button
          aria-label="Actions"
          className="bg-lime-500 text-black px-6 py-2 text-sm font-medium rounded-md hover:bg-opacity-80"
        >
          + Actions
        </button>
      </div>
      {isPlayerMenuOpen && (
        <div className="absolute top-40 left-12 w-fit h-96 overflow-auto bg-black  z-50 rounded-lg lg:hidden">
          <PlayerMenu />
        </div>
      )}
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
          <CollapsibleCard
            title="BALANCE INFO"
            imageSrc="/transactionsIcon.svg"
            data={BALANCE_FIELDS}
            values={BALANCE_INFO}
          />
          <CollapsibleCard
            title="Security Info"
            imageSrc="/Misc.svg"
            data={SECURITY_FIELDS}
            values={SECURITY_INFO}
          />
          <CollapsibleCard
            title="IP Addresses"
            imageSrc="/location.svg"
            data={IP_FIELDS}
            values={IP_ADDRESSES}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoContainer;
