import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { auth } from '../../../firebase/clientApp';
import { VscAccount } from 'react-icons/vsc';
import { IoSparkles } from 'react-icons/io5';
import { useOnClickOutside } from '../../../utils/utils';
import { MdOutlineLogin } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import { authModalState } from '../../../atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';

type Props = {
  user: boolean;
};

const MenuItem = ({ user }: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <div className='relative'>
      <ul className='absolute rounded-md right-0 bg-white shadow-md mt-7 py-2 text-xs md-text-md w-40'>
        <div className='text-center'>
          {user ? (
            <>
              <li className='hover:bg-blue-400 hover:text-white p-1 flex space-x-2 items-center'>
                <CgProfile size={16} className='ml-2' />
                <p>Profile</p>
              </li>

              <li
                onClick={() => signOut(auth)}
                className='hover:bg-blue-400 hover:text-white p-1 flex space-x-2 items-center'
              >
                <MdOutlineLogin size={16} className='ml-2' />
                <p>Sign Out</p>
              </li>
              <li className='hover:bg-blue-400 p-1 hover:text-white'>Option 3</li>
            </>
          ) : (
            <>
              <li
                onClick={() => signOut(auth)}
                className='hover:bg-blue-400 hover:text-white p-1 flex space-x-2 items-center'
              >
                <MdOutlineLogin size={16} className='ml-2' />
                <p
                  onClick={() => setAuthModalState({ open: true, view: 'login' })}
                  className='cursor-pointer'
                >
                  Sign In / Sign Out
                </p>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default MenuItem;
