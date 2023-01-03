import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import RightSideNav from './rightSideContent';
import SearchBar from './SearchBar';

type Props = {};

const NavBar = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className='flex bg-white py-0.5 px-2 items-center space-x-1'>
      <div className='flex items-center'>
        <img src='/images/redditFace.svg' className='h-6' />
        <img src='/images/redditText.svg' className='h-11 hidden md:flex lg:flex xl:flex' />
      </div>
      <SearchBar />
      <RightSideNav user={user} />
    </nav>
  );
};

export default NavBar;
