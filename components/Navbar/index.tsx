import React from 'react';
import SearchBar from './SearchBar';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className='flex bg-white py-0.5 px-3'>
      <div className='flex items-center'>
        <img src='/images/redditFace.svg' className='h-6' />
        <img src='/images/redditText.svg' className='h-11 hidden md:flex lg:flex xl:flex' />
      </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
