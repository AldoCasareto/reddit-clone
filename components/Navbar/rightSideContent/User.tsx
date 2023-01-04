import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { User } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { FaRedditSquare } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { IoSparkles } from 'react-icons/io5';
import { useOnClickOutside } from '../../../utils/utils';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import MenuItem from './MenuItem';

type Props = {
  user?: User | null;
};

const UserDropDown = ({ user }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className='relative flex'>
      <div className='flex items-center cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {user ? (
          <div className='flex items-center'>
            <FaRedditSquare size={18} className='mr-1' />
          </div>
        ) : (
          <div className='flex items-center'>
            <UserIcon className='h-5 w-5' />
          </div>
        )}
        <ChevronDownIcon className='h-4 w-3 text-gray-400' />
        <>{isMenuOpen && <MenuItem user={!!user} />}</>
      </div>
    </div>
  );
};

export default UserDropDown;
