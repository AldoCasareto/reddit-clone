import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {};

const User = (props: Props) => {
  return (
    <div className='flex items-center '>
      <UserIcon className='h-6 w-6' />
      <ChevronDownIcon className='h-4 w-3 text-gray-400' />
    </div>
  );
};

export default User;
