import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className='flex flex-1 ml-3 items-center border bg-gray-100 hover:border-cyan-400 rounded-md'>
      <MagnifyingGlassIcon className='h-6 w-6 text-gray-300' />
      <input
        type='text'
        className='bg-gray-100 text-gray-500 text-sm p-2 rounded-md flex-1 outline-none'
        placeholder='Search Reddit'
      />
    </div>
  );
};

export default SearchBar;
