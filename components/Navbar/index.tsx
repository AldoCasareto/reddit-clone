import React from 'react';
import RightSideNav from './rightSideContent';
import SearchBar from './SearchBar';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className='flex bg-white py-0.5 px-2 items-center space-x-1'>
      <div className='flex items-center'>
        <img src='/images/redditFace.svg' className='h-6' />
        <img src='/images/redditText.svg' className='h-11 hidden md:flex lg:flex xl:flex' />
      </div>
      <SearchBar />
      <RightSideNav />
    </nav>
  );
};

export default NavBar;
